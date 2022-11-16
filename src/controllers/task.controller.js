const pool = require("../db");

module.exports = {
  async getAllTasks(req, res) {
    try {
      const result = await pool.query("SELECT * FROM task");

      res.status(200).json({
        result,
      });
    } catch (err) {
      res.json(400).json({ message: err.message });
    }
  },
  async getTask(req, res) {
    try {
      const id = req.params;
      // const result = await pool.query(`SELECT * FROM task WHERE id=${id}`);

      console.log(id);

      res.status(200).json({
        id,
      });
    } catch (err) {
      res.json(400).json({ message: err.message });
    }
  },
  async createTask(req, res) {
    try {
      const { title, description } = req.body;

      const result = await pool.query(
        `INSERT INTO task (title,description) VALUES ($1,$2) RETURNING *`,
        [title, description]
      );

      res.status(200).json({
        result,
      });
    } catch (err) {
      res.json(400).json({ message: err.message });
    }
  },
  async updateTask(req, res) {},
  async destroyTask(req, res) {},
};
