import sql from 'better-sqlite3';


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


export async function getMealsByCreator(creator) {
    return db
        .prepare('SELECT * FROM meals WHERE creator = ?')
        .all(creator);
}
