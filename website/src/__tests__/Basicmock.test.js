const serverMock = {
  myMethod: jest
  .fn()
  .mockReturnThis()
};

it('Stupid test', () => {
  expect(true).toEqual(true);
});

