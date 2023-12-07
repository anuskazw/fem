// export const MODE = 'MODE';
export function addSharedReducer(state: any[] = [], action :any) {
  switch (action.type) {
    case 'CHANGE_MODE':
      return [...state, action.payload];
    default:
      return state;
  }
}
