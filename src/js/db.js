import { JSONPreset } from "lowdb/node";

const defaultData = { emails: [] };
const db = await JSONPreset("db.json", defaultData);

export default db;
