'use server';

import { addMeal } from "@/lib/meals";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const isInvalid = (value) => {
    return value === null || value === undefined || value === '';
}

export const shareMeal = async (prevState, fromData) => {
    
    const meal = {
       title : fromData.get('title'),
       summary : fromData.get('summary'),
       instructions : fromData.get('instructions'),
       creator : fromData.get('name'),
       creator_email : fromData.get('email'),
       image : fromData.get('image'),
    }
    
    if( isInvalid(meal.title) ||
        isInvalid(meal.summary) || 
        isInvalid(meal.instructions) || 
        isInvalid(meal.creator) || 
        isInvalid(meal.creator_email) || 
        isInvalid(meal.image) || 
        !meal.creator_email.includes('@') ||
        !meal.creator_email.includes('.') ||
        !meal.image ||
        meal.image.size > 200000 ||
        meal.image.size ===0
    ) {
        return {
            message : 'Invalid input',
            error : true
        }
    }

    await addMeal(meal);
    revalidatePath('/meals');
    redirect('/meals');
}