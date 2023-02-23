import  {layout}  from '../src/layout/layout';

beforeEach(()  => {
    document.body.appendChild(layout());
})

test('the main container is rendered', () => {
    let mainContainer = document.getElementsByClassName('main')[0]
    expect(mainContainer).toBeTruthy();
})