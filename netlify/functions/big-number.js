export async function handler(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ value: '123456789123456789123456789123456789123456789123456789' }),
  }
}
