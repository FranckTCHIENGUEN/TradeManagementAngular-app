import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export function placeObjectAtFirstPosition<T>(array$: Observable<T[]> | undefined, obj: T): Observable<T[]> {
  if (!array$) {
    // Si l'observable est indéfini, renvoyer un tableau contenant uniquement l'objet
    return new Observable(observer => {
      observer.next([obj]);
      observer.complete();
    });
  }

  return array$.pipe(
    map(array => {
      // Supprime l'objet du tableau s'il existe déjà pour éviter les doublons
      const filteredArray = array.filter(item => item !== obj);

      // Place l'objet en première position
      return [obj, ...filteredArray];
    })
  );
}
