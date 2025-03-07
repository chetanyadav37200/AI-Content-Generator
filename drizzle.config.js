/** @type { import("drizzle-kit").Config } */

export default {

    schema: "./utils/schema.tsx",
    
    dialect: 'postgresql',
    
    dbCredentials: {
    
    url:'postgresql://neondb_owner:npg_wCZv5Db6kUsy@ep-delicate-math-a5ds1306-pooler.us-east-2.aws.neon.tech/AI-Content-Generator?sslmode=require',
    
    }
    
    };