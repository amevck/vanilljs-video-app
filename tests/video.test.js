import { queryByAttribute, waitFor } from '@testing-library/dom';
import '@testing-library/jest-dom/extend-expect';
import { JSDOM } from 'jsdom';
import fs from 'fs';
import path from 'path';

const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

let dom;
let container;

describe('video root element', () => {
    const getById = queryByAttribute.bind(null, 'id');
    beforeEach(() => {
        dom = new JSDOM(html, { runScripts: 'dangerously' });
        container = dom.window.document.body;
    });

    it('marker should be in the screen', async () => {
        await waitFor(() => {
            expect(getById(container, 'marker')).toBeInTheDocument();
        }, { timeout: 5000 });
    });

    it('thumbnail should appear after 4 seconds', async () => {

    });

    it('thumbnail should disappear after 60 seconds', async () => {

    });
});
