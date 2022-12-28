import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Courses -> Teachers 



async function find() {
    const result = await prisma.courses.findMany({
        where: {
            id: 'd2b2e777-0ab4-4312-b9b3-0ce92f35879d'
        },
        include: {
            teacher: true
        }
    })

    console.log(result)
}

find()