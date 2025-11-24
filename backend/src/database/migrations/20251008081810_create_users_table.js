/**
 * Tạo bảng users
 * @param { import('knex').Knex } knex
 */
export async function up(knex) {
    await knex.schema.createTable('users', (table) => {
        table.increments('id').primary()
        table.string('name', 100).notNullable()
        table.string('email', 150).notNullable().unique()
        table.string('password', 255).notNullable()
        table.timestamps(true, true) // created_at, updated_at
    })
}

/**
 * Xóa bảng users nếu rollback
 * @param { import('knex').Knex } knex
 */
export async function down(knex) {
    await knex.schema.dropTableIfExists('users')
}
