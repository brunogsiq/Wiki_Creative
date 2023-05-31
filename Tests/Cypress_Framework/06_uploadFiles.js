/*
Installation
The package is distributed via npm and should be installed as one of your project's devDependencies:

npm install --save-dev cypress-file-upload
If you are using TypeScript, ensure your tsconfig.json contains commands' types:

"compilerOptions": {
  "types": ["cypress", "cypress-file-upload"]
}
To be able to use any custom command you need to add it to cypress/support/commands.js like this:

import 'cypress-file-upload';
Then, make sure this commands.js is imported in cypress/support/index.js (it might be commented):

// Import commands.js using ES2015 syntax:
import './commands';
All set now! 💥

Usage
Now, let's see how we can actually test something. Exposed command has signature like:

cySubject.attachFile(fixture, optionalProcessingConfig);
It is a common practice to put all the files required for Cypress tests inside cypress/fixtures folder and call them as fixtures (or a fixture). The command recognizes cy.fixture format, so usually this is just a file name.

HTML5 file input
cy.get('[data-cy="file-input"]')
  .attachFile('myfixture.json');
Drag-n-drop component
cy.get('[data-cy="dropzone"]')
  .attachFile('myfixture.json', { subjectType: 'drag-n-drop' });
Attaching multiple files
cy.get('[data-cy="file-input"]')
  .attachFile(['myfixture1.json', 'myfixture2.json']);
Note: in previous version you could also attach it chaining the command. It brought flaky behavior with redundant multiple event triggers, and was generally unstable. It might be still working, but make sure to use array instead.

Working with file encodings
In some cases you might need more than just plain JSON cy.fixture. If your file extension is supported out of the box, it should all be just fine.

In case your file comes from some 3rd-party tool, or you already observed some errors in console, you likely need to tell Cypress how to treat your fixture file.

cy.get('[data-cy="file-input"]')
  .attachFile({ filePath: 'test.shp', encoding: 'utf-8' });
Trying to upload a file that does not supported by Cypress by default? Make sure you pass encoding property (see API).

Working with raw file contents
Normally you do not need this. But what the heck is normal anyways :neckbeard:

If you need some custom file preprocessing, you can pass the raw file content:

const special = 'file.spss';

cy.fixture(special, 'binary')
  .then(Cypress.Blob.binaryStringToBlob)
  .then(fileContent => {
    cy.get('[data-cy="file-input"]').attachFile({
      fileContent,
      filePath: special,
      encoding: 'utf-8',
      lastModified: new Date().getTime()
    });
  });
You still need to provide filePath in order to get file's metadata and encoding. For sure this is optional, and you can do it manually:

cy.fixture('file.spss', 'binary')
  .then(Cypress.Blob.binaryStringToBlob)
  .then(fileContent => {
    cy.get('[data-cy="file-input"]').attachFile({
      fileContent,
      fileName: 'whatever',
      mimeType: 'application/octet-stream',
      encoding: 'utf-8',
      lastModified: new Date().getTime(),
    });
  });
Override the file name
cy.get('[data-cy="file-input"]')
  .attachFile({ filePath: 'myfixture.json', fileName: 'customFileName.json' });
Working with empty fixture file
Normally you have to provide non-empty fixture file to test something. If your case isn't normal in that sense, here is the code snippet for you:

cy.get('[data-cy="file-input"]')
  .attachFile({ filePath: 'empty.txt', allowEmpty: true });
Waiting for the upload to complete
Cypress' cy.wait command allows you to pause code execution until some asyncronous action is finished. In case you are testing file upload, you might want to wait until the upload is complete:

// start watching the POST requests
cy.server({ method:'POST' });
// and in particular the one with 'upload_endpoint' in the URL
cy.route({
  method: 'POST',
  url: /upload_endpoint/
}).as('upload');


const fileName = 'upload_1.xlsx';

cy.fixture(fileName, 'binary')
    .then(Cypress.Blob.binaryStringToBlob)
    .then(fileContent => {
      cy.get('#input_upload_file').attachFile({
        fileContent,
        fileName,
        mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        encoding:'utf8',
        lastModified: new Date().getTime()
      })
    })

// wait for the 'upload_endpoint' request, and leave a 2 minutes delay before throwing an error
cy.wait('@upload', { requestTimeout: 120000 });

// stop watching requests
cy.server({ enable: false })

// keep testing the app
// e.g. cy.get('.link_file[aria-label="upload_1"]').contains('(xlsx)');
I wanna see some real-world examples
There is a set of recipes that demonstrates some framework setups along with different test cases. Make sure to check it out when in doubt.

API
Exposed command in a nutshell:

cySubject.attachFile(fixture, processingOpts);
Familiar with TypeScript? It might be easier for you to just look at type definitions.

fixture can be a string path (or array of those), or object (or array of those) that represents your local fixture file and contains following properties:

{string} filePath - file path (with extension)
{string} fileName - the name of the file to be attached, this allows to override the name provided by filePath
{Blob} fileContent - the binary content of the file to be attached
{string} mimeType - file MIME type. By default, it gets resolved automatically based on file extension. Learn more about mime
{string} encoding - normally cy.fixture resolves encoding automatically, but in case it cannot be determined you can provide it manually. For a list of allowed encodings, see here
{number} lastModified - The unix timestamp of the lastModified value for the file. Defaults to current time. Can be generated from new Date().getTime() or Date.now()
processingOpts contains following properties:

{string} subjectType - target (aka subject) element kind: 'drag-n-drop' component or plain HTML 'input' element. Defaults to 'input'
{boolean} force - same as for cy.trigger, it enforces the event triggers on HTML subject element. Usually this is necessary when you use hidden HTML controls for your file upload. Defaults to false
{boolean} allowEmpty - when true, do not throw an error if fileContent is zero length. Defaults to false
Recipes
There is a set of recipes that demonstrates some framework setups along with different test cases. Make sure to check it out when in doubt.

Any contributions are welcome!

Caveats
During the lifetime plugin faced some issues you might need to be aware of:

Chrome 73 changes related to HTML file input behavior: #34
Force event triggering (same as for cy.trigger) should happen when you use hidden HTML controls: #41
Binary fixture has a workarounded encoding: #70
Video fixture has a workarounded encoding: #136
XML encoded files: #209
Shadow DOM compatibility: #74
Reading file content after upload: #104
*/