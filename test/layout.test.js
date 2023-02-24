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

test('There is a default project ', () => {
    let project = document.getElementsByClassName('project-button')[0];
    expect(project).toBeTruthy();
})

test('The default project says Project 1', () => {
    let projectText = document.getElementsByClassName('project-button')[0].textContent
    expect(projectText).toBe('Project 1');
})

test('add project button is rendered', () => {
    let addProjectButton = document.getElementsByClassName('navbar')[0];
    expect(addProjectButton).toBeTruthy();
})

test('the navbar is rendered', () => {
    let navbar = document.getElementsByClassName('navbar')[0];
    expect(navbar).toBeTruthy();
})