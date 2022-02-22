import { SelectQueryBuilder } from "typeorm";

export async function getRawManyAndCountWithGroupBy<T>(
    qb: SelectQueryBuilder<any>,
    groupColumns: string[],
  ): Promise<[number, T[]]> {
    return Promise.all([
      new Promise<number>((resolve, reject) => {
        const cQb = qb.clone();
        cQb.offset(0);
        cQb.skip(0);
        cQb.limit(0);
        cQb.orderBy('');
        cQb.select(`COUNT(DISTINCT (${groupColumns.join(', ')})) as c`);
        cQb
          .getRawOne()
          .then((value) => resolve(value.c ? Number(value.c) : 0))
          .catch((e) => reject(e));
      }),
      new Promise<T[]>((resolve, reject) => {
        const vQb = qb.clone();
        vQb.groupBy(groupColumns.join(', '));
        vQb
          .getRawMany()
          .then((values) => resolve(values))
          .catch((e) => reject(e));
      }),
    ]);
  }