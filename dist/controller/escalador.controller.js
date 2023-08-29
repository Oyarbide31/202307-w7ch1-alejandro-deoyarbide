export class EscaladorController {
    repo;
    constructor(repo) {
        this.repo = repo;
        this.repo = repo;
    }
    async getAll(req, res, next) {
        try {
            const data = await this.repo.getAll();
            res.json(data);
        }
        catch (error) {
            next(error);
        }
    }
    async create(req, res, next) {
        try {
            const finalEscalador = await this.repo.post(req.body);
            res.status(201);
            res.json(finalEscalador);
        }
        catch (error) {
            next(error);
        }
    }
    async getById(req, res, next) {
        try {
            const { id } = req.params;
            const data = await this.repo.getById(id);
            res.json(data);
        }
        catch (error) {
            next(error);
        }
    }
    async update(req, res, next) {
        try {
            const { id } = req.params;
            const finalEscalador = await this.repo.patch(id, req.body);
            res.json(finalEscalador);
        }
        catch (error) {
            next(error);
        }
    }
    async delete(req, res, next) {
        try {
            const { id } = req.params;
            await this.repo.delete(id);
            res.status(204);
            res.json({});
        }
        catch (error) {
            next(error);
        }
    }
}
