import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';
import fs from 'node:fs';


const db = sql('meals.db');


export async function getMeals() {
    await new Promise(resolve => setTimeout(resolve, 500));
    return db.prepare('SELECT * FROM meals').all();
}


export async function getMealById(slug) {
    await new Promise(resolve => setTimeout(resolve, 500));
    return db
        .prepare('SELECT * FROM meals WHERE slug = ?')
        .get(slug);
}


export async function addMeal(meal) {
    meal.slug = slugify(meal.title, { lower: true });
    meal.instructions = xss(meal.instructions);

    const extension = meal.image.name.split('.').pop();
    const fileName = `${meal.slug}.${extension}`;

    const stream = fs.createWriteStream(`public/images/${fileName}`);
    const bufferImage = await meal.image.arrayBuffer();
    stream.write(Buffer.from(bufferImage), (error) => {
        if (error) throw new Error('Saving image failed',error);
        stream.end();
    });
    meal.image = `/images/${fileName}`;


    return db.prepare(`INSERT INTO meals 
        (title, image, summary, instructions, creator, creator_email, slug) 
        VALUES 
        (@title, @image, @summary, @instructions, @creator, @creator_email, @slug)`).run(meal);
}