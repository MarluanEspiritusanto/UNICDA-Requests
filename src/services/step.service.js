let _stepRepository = null;

class StepService {
  constructor({ StepRepository }) {
    _stepRepository = StepRepository;
  }
  async getStep(id) {
    const step = await _stepRepository.get(id);
    return step;
  }

  async getStepByName(name) {
    const step = await _stepRepository.getStepByName(name);
    return step;
  }

  async getAllSteps(pageSize, pageNum) {
    const steps = await _stepRepository.getAll(pageSize, pageNum);
    return steps;
  }

  async createStep(step) {
    const createdStep = await _stepRepository.create(step);
    return createdStep;
  }

  async updateStep(id, step) {
    const updatedStep = await _stepRepository.update(id, step);
    return updatedStep;
  }

  async deleteStep(id) {
    return await _stepRepository.delete(id);
  }
}

module.exports = StepService;