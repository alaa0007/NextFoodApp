'use server';

import { addMeal } from "@/lib/meals";
import { redirect } from "next/navigation";

const isInvalid = (value) => {
    return value === null || value === undefined || value.trim() === '';
}

export const shareMeal = async (fromData) => {
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
        throw new Error('Invalid form data');
    }

    await addMeal(meal);
    redirect('/meals');
}