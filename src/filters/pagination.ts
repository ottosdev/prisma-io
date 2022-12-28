import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

/**
 * 
 * [1,2,3,4,5]
 * 
 */
async function pagination() {

    let skip = 0;
    let exist = true;
    while(exist) {
        const result = await prisma.courses.findMany({
            skip: skip, // skip a number of position that you set 
            take: 2 //  take the position after that you skip.
        })
        skip += 2;


        console.log(result)
        console.log(`-------------`)

        if(result.length <= 0) {
            exist = false;
        }
    }
}
pagination()