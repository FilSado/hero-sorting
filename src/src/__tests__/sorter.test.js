    import { sortByHealth } from '../sorter';

    describe('sortByHealth', () => {
      it('should sort heroes by health in descending order', () => {
        const heroes = [
          { name: 'мечник', health: 10 },
          { name: 'маг', health: 100 },
          { name: 'лучник', health: 80 },
        ];
        const expected = [
          { name: 'маг', health: 100 },
          { name: 'лучник', health: 80 },
          { name: 'мечник', health: 10 },
        ];
        expect(sortByHealth(heroes)).toEqual(expected);
      });

      it('should return a new array', () => {
        const heroes = [
          { name: 'мечник', health: 10 },
          { name: 'маг', health: 100 },
          { name: 'лучник', health: 80 },
        ];
        const sorted = sortByHealth(heroes);
        expect(sorted).not.toBe(heroes); // Проверяем, что это новый массив
      });

      it('should handle empty array', () => {
        expect(sortByHealth([])).toEqual([]);
      });

      it('should handle array with one element', () => {
        const heroes = [{ name: 'маг', health: 100 }];
        expect(sortByHealth(heroes)).toEqual(heroes);
      });
    });
