import global from '@/utils/global';
import request from './request';

const { legacy } = global;

export function getTable(table) {
  return request(
    {
         url: `${legacy.urlbase}/ScheduleManage/p/getTable`,
         method: 'get',
         params: {
         table
       }
    });
}
