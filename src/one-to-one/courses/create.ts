import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: "Curso de Node",
      duration: 500,
      description: "Curso de node 16",
      teacher: {
        connectOrCreate: {
          where: {
            name: "Otto Souza",
          },
          create: {
            name: "Otto Souza",
          },
        },
      },
    },
  });
  console.log(result)
}

async function main1() {
  const result = await prisma.courses.create({
    data: {
      name: "Curso de Swift",
      duration: 100,
      description: "Curso de Swift",
      teacher: {
        connect: {
         id: 'c654ffe7-6a29-4569-b94d-5d386623a052'
        },
      },
    },
  });
  console.log(result)
}

main1();
