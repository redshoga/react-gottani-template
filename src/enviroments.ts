export interface EnvironmentVariables {
  sampleKey: string
}

// https://qiita.com/uni-3/items/b6876a60060789583770
export const environments: EnvironmentVariables = {
  sampleKey: process.env.REACT_APP_SAMPLE_KEY!
}

export const validateEnviroments = () => {
  Object.entries(environments).forEach(([key, value]) => {
    if (value === undefined || value === null || value === '') {
      console.error(`Missing environment variable: '${key}'`)
    }
  })
}
