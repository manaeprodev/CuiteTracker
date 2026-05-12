export type Sex = 'male' | 'female'

export type StomachState = 'empty' | 'normal' | 'full'

export interface DrinkEntry {
  name: string
  degree: number
  volumeCl: number
  cuiteIndex: number
  consumedAt: Date
}

export interface UserParams {
  sex: Sex
  weight: number
  height: number
  age?: number
  stomach: StomachState
  fatigue: 'rested' | 'tired' | 'exhausted'
  hydration: 'good' | 'normal' | 'dehydrated'
  speed: 'slow' | 'normal' | 'fast'
}

const STOMACH_COEFF: Record<StomachState, number> = {
  empty: 1.15,
  normal: 1.0,
  full: 0.85,
}

const FATIGUE_COEFF = { rested: 1.0, tired: 1.05, exhausted: 1.1 }
const HYDRATION_COEFF = { good: 0.97, normal: 1.0, dehydrated: 1.08 }
const SPEED_COEFF = { slow: 0.95, normal: 1.0, fast: 1.15 }

export function calcAlcoholGrams(volumeCl: number, degree: number): number {
  return volumeCl * degree * 0.08
}

export function calcBloodAlcohol(drinks: DrinkEntry[], user: UserParams): number {
  const r = user.sex === 'male' ? 0.68 : 0.55
  const totalAlcohol = drinks.reduce((sum, d) => sum + calcAlcoholGrams(d.volumeCl, d.degree), 0)

  const firstDrink = drinks.reduce((min, d) => d.consumedAt < min ? d.consumedAt : min, drinks[0].consumedAt)
  const hoursElapsed = (Date.now() - firstDrink.getTime()) / 3600000

  const rawRate = totalAlcohol / (user.weight * r)
  const elimination = 0.12 * hoursElapsed

  const rate =
    (rawRate - elimination) *
    STOMACH_COEFF[user.stomach] *
    FATIGUE_COEFF[user.fatigue] *
    HYDRATION_COEFF[user.hydration] *
    SPEED_COEFF[user.speed]

  return Math.max(0, rate)
}

export function calcCuiteScore(drinks: DrinkEntry[]): number {
  return drinks.reduce((sum, d) => {
    const alcoholGrams = calcAlcoholGrams(d.volumeCl, d.degree)
    return sum + alcoholGrams * Math.pow(d.cuiteIndex, 1.2)
  }, 0)
}

export type CuiteLevel = 'Sobre' | 'Joyeux' | 'Éméché' | 'Bourré' | 'Démoli' | 'Légendaire'

export function getCuiteLevel(score: number): CuiteLevel {
  if (score < 20) return 'Sobre'
  if (score < 50) return 'Joyeux'
  if (score < 90) return 'Éméché'
  if (score < 140) return 'Bourré'
  if (score < 220) return 'Démoli'
  return 'Légendaire'
}

export function estimateSoberTime(bloodAlcohol: number): number {
  return bloodAlcohol / 0.12
}