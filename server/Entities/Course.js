const { EntitySchema } = require('typeorm');

const Course = new EntitySchema({
    name: "Course",
    tableName: "courses",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        chapter: {
            type: "text"
        },
        lesson_name: {
            type: "text"
        },
        type: {
            type: "varchar",
            length: 50
        },
        content: {
            type: "text",
            nullable: true
        },
        lesson_points: {
            type: "varchar",
            length: 500,
            nullable: true
        },
        status: {
            type: "varchar",
            length: 20,
            default: "Draft"
        },
        
    },
    uniques: [
        {
            name: "chapter_lesson_name_unique",  // Doesn't allow duplicates listed fields, one duplicated field is allowed
            columns: ["chapter", "lesson_name"], // for example same chapter but different lesson_name is allowed
        },
    ],
});

module.exports = Course;