import operations from '../src/operations';

describe('Division', () => {
  it('should return 4 if a equals 8 and b equals 2', () => {
    //jest.spyOn(operations, "div").mockReturnValue(25);
    /*jest
      .spyOn(operations, 'div')
      .mockImplementationOnce((a: number, b: number) => {
        return a + b;
      });*/

    const divSpy = jest.spyOn(operations, "div");
    const total = operations.div(8, 2);
    const total2 = operations.div(7, 3);
    

    expect(total).toEqual(4);

    expect(divSpy).toHaveBeenCalledWith(8, 2);
    expect(divSpy).toHaveBeenCalledWith(7, 3);
    expect(divSpy).toHaveBeenNthCalledWith(2, 7, 3);

    expect(divSpy).toHaveBeenCalledTimes(2);
  });
});
