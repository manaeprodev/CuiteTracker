export interface Drink {
  id: string
  name: string
  degree: number
  cuiteIndex: number
  type: 'beer' | 'wine' | 'spirit' | 'cocktail' | 'other'
  emoji: string
}

export const DRINKS: Drink[] = [
  { id: 'blonde', name: 'Bière blonde', degree: 5, cuiteIndex: 2, type: 'beer', emoji: '🍺' },
  { id: 'ipa', name: 'IPA', degree: 6.5, cuiteIndex: 3, type: 'beer', emoji: '🍺' },
  { id: 'brune', name: 'Bière brune', degree: 6, cuiteIndex: 3, type: 'beer', emoji: '🍺' },
  { id: 'rouge', name: 'Bière rouge', degree: 7, cuiteIndex: 2, type: 'beer', emoji: '🍺' },
  { id: 'cidre', name: 'Cidre', degree: 4.5, cuiteIndex: 2, type: 'beer', emoji: '🍎' },
  { id: 'vin-rouge', name: 'Vin rouge', degree: 13, cuiteIndex: 4, type: 'wine', emoji: '🍷' },
  { id: 'vin-blanc', name: 'Vin blanc', degree: 12, cuiteIndex: 4, type: 'wine', emoji: '🥂' },
  { id: 'rose', name: 'Rosé', degree: 12, cuiteIndex: 3, type: 'wine', emoji: '🍷' },
  { id: 'champagne', name: 'Champagne', degree: 12, cuiteIndex: 5, type: 'wine', emoji: '🥂' },
  { id: 'vodka', name: 'Vodka', degree: 40, cuiteIndex: 8, type: 'spirit', emoji: '🥃' },
  { id: 'whisky', name: 'Whisky', degree: 43, cuiteIndex: 9, type: 'spirit', emoji: '🥃' },
  { id: 'rhum', name: 'Rhum', degree: 40, cuiteIndex: 8, type: 'spirit', emoji: '🥃' },
  { id: 'gin', name: 'Gin', degree: 40, cuiteIndex: 8, type: 'spirit', emoji: '🍸' },
  { id: 'tequila', name: 'Tequila', degree: 40, cuiteIndex: 9, type: 'spirit', emoji: '🥃' },
  { id: 'absinthe', name: 'Absinthe', degree: 69, cuiteIndex: 10, type: 'spirit', emoji: '🍵' },
  { id: 'mojito', name: 'Mojito', degree: 10, cuiteIndex: 4, type: 'cocktail', emoji: '🍹' },
  { id: 'spritz', name: 'Spritz', degree: 8, cuiteIndex: 3, type: 'cocktail', emoji: '🍹' },
]