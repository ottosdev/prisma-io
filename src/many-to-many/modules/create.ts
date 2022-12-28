import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function create() {
    const result = await prisma.modules.create({
        data: {
            description:  'Aprendendo firebase do 0',
            name: 'Aprendendo firebase',
            CoursesModules: {
                create: {
                    courses: {
                        connect: {
                            id: 'd2b2e777-0ab4-4312-b9b3-0ce92f35879d'
                        }
                    }
                }
            }
        }
    })

    console.log(result)
}


async function createManyToMany() {
    const result = await prisma.coursesModules.create({
        data: {
            fk_id_courses: 'a6bcf96f-54b9-4b01-8c0c-e46aaa4268ec',
            fk_id_modules: 'cb46357b-c63b-403b-9a18-f4fe2a3b83a3'
        }
    })

    console.log(result)
}

createManyToMany()