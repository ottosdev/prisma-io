import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function findMany() {
  const result = await prisma.courses.findMany({
    where: {
      name: {
        startsWith: "Curso",
        mode: "insensitive",
      },
    },
  });
  console.log(result);
}

async function filterOr() {
  const result = await prisma.courses.findMany({
    where: {
      OR: [
        {
          name: {
            contains: "React",
          },
        },
        {
            name: {
                contains: 'Node'
            }
        }
      ],
      AND: {
        duration: 300
      }
    },
  });
  console.log(result);
}

filterOr();
//findMany()
