import { prisma } from '../src/lib/prisma'

async function seed() {
    await prisma.event.create({
        data: {
            id: 'dc86c4e2-0279-4498-b265-4de63e6fcfe6',
            title: 'Example Event',
            slug: 'example-event',
            details: 'This is an example event',
            maximumAttendees: 120,
        }
    })
}

seed().then(() => {
    console.log('Seeded database');
    prisma.$disconnect();
})