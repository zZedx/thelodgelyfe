export async function throwError(res: Response): Promise<void> {
  const data = await res.json();
  throw new Error(data.message);
}
