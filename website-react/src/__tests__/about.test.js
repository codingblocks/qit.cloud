import 'jest-dom/extend-expect'

it('this will be the only test that runs', () => {
    expect(true).toEqual(true);
  });
  
 

window.it('should have an inner content area', () => {
    const ancestor = document.querySelector('[className="innerContent"]') 
    const inner = document.querySelector('[className="finePrint"]')
    const notHere = document.querySelector('[id="doesNotExist"]',)
    expect(inner).toBeInTheDocument()
    expect(notHere).not.toBeInTheDocument()
});