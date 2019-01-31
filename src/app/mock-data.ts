import { Player } from './player.model';

export const STARTERS = [
    {
      id: '1',
      name: 'Daniel Isoforo',
      first_name: 'Daniel',
      last_name: 'Isoforo',
      images: [{
        width: 123,
        height: 123,
        url: 'link'
      }],
      country: {
        name: 'colombia',
        code: '1'
      },
      position: 'goalkeeper',
      number: 1,
      birth_date: '12',
      age: 11,
      height: 12,
      weight: 70,
      starter: true,
      pitch_position: 1,
      selected: false,
    },
    {
      id: '2',
      name: 'Rodrigo Paz',
      first_name: 'Rodrigo',
      last_name: 'Paz',
      images: [{
        width: 123,
        height: 123,
        url: 'link'
      }],
      country: {
        name: 'Brazil',
        code: '2'
      },
      position: 'midfield',
      number: 1,
      birth_date: '12',
      age: 11,
      height: 12,
      weight: 70,
      starter: true,
      pitch_position: 10,
      selected: false,
    }
];

export const PLAYERS = [
    {
      id: '1',
      name: 'Daniel Isoforo',
      first_name: 'Daniel',
      last_name: 'Isoforo',
      images: [{
        width: 123,
        height: 123,
        url: 'link'
      }],
      country: {
        name: 'colombia',
        code: '1'
      },
      position: 'goalkeeper',
      number: 1,
      birth_date: '12',
      age: 11,
      height: 12,
      weight: 70,
      starter: true,
      pitch_position: 1,
      selected: false,
    },
    {
      id: '2',
      name: 'Rodrigo Paz',
      first_name: 'Rodrigo',
      last_name: 'Paz',
      images: [{
        width: 123,
        height: 123,
        url: 'link'
      }],
      country: {
        name: 'Brazil',
        code: '2'
      },
      position: 'midfield',
      number: 1,
      birth_date: '12',
      age: 11,
      height: 12,
      weight: 70,
      starter: true,
      pitch_position: 10,
      selected: false,
    }
];

export const mockPlayer: Player = {
    id: '3',
    name: 'Andy Ares',
    first_name: 'Lola',
    last_name: 'Ares',
    images: [{
      width: 123,
      height: 123,
      url: 'link'
    }],
    country: {
      name: 'U.K.',
      code: '1'
    },
    position: 'goalkeeper',
    number: 23,
    birth_date: '12',
    age: 11,
    height: 12,
    weight: 70,
    starter: false,
    pitch_position: 12,
    selected: false,
  };

export const mockSelectedPlayer: Player = {
    id: '4',
    name: 'Ronaldo Futbol',
    first_name: 'Ronaldo',
    last_name: 'Futbol',
    images: [{
      width: 123,
      height: 123,
      url: 'link'
    }],
    country: {
      name: 'Brazil',
      code: '4'
    },
    position: 'midfield',
    number: 1,
    birth_date: '12',
    age: 11,
    height: 12,
    weight: 70,
    starter: false,
    pitch_position: 12,
    selected: false,
};
