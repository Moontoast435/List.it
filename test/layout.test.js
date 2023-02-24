import  {layout}  from '../src/layout/layout';

beforeEach(()  => {
    document.body.appendChild(layout());
})

test('the main container is rendered', () => {
    let mainContainer = document.getElementsByClassName('main')[0]
    expect(mainContainer).toBeTruthy();
})

test('the navbar is rendered', () => {
    let navbar = document.getElementsByClassName('navbar')[0];
    expect(navbar).toBeTruthy();
})