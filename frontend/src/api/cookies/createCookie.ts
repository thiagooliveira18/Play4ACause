"use server";

import { cookies } from 'next/headers';

export async function serverAction(data: string) {
    'use server';
    cookies().set('authorization', data);
}