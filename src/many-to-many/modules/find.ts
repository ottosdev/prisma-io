import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

async function find() {
    const result = await prisma.courses.findMany({
        include: {
            CoursesModules: true
        }

    })
    console.log(JSON.stringify(result))

}

async function findByRelation() {

    const result = await prisma.coursesModules.findMany({
        include: {
            courses: true,
            modules: true
        }
    })
    console.log(result)
}

async function remove() {
    const result = await prisma.coursesModules.delete({
        where: {
            id: '8205d577-50ac-4fbc-9007-0dc5f17f7b2d'
        }
    })

    console.log(result)
}

//find()
//findByRelation()
remove()