// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();

// async function create() {
//   const result = await prisma.courses.create({
//     data: {
//       name: "Nodejs",
//       duration: 200,
//       description: "It is about how to learn Nodejs",
//     },
//   });

//   console.log(result);
// }
// async function update() {
//   const getCourse = await prisma.courses.findUnique({
//     where: { id: "b28e273e-288b-4897-ae17-b0b1bb864719" },
//   });

//   await prisma.courses.update({
//     where: { id: getCourse?.id },
//     data: {
//         name: 'Reactjs',
//         duration: 100
//     }
//   });
// }

// async function find() {
//   // select * from courses limit 1
//   // const course = await prisma.courses.findUnique({where: {
//   //     id: 'b28e273e-288b-4897-ae17-b0b1bb864719'
//   // }});
//   const course = await prisma.courses.findMany({
//     orderBy: [{ name: "asc" }],
//   });

//   console.log(course);
// }

// // create();
// // find();
// update()