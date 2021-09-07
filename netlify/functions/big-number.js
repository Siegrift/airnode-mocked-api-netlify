export async function handler(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ value: '12345678987654321123456789' }),
  }
}
