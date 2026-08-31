import {readFile, writeFile, appendFile} from 'fs/promises';
import fs from 'fs';

async function fileOperations() {
    try {
        // create a file
        await writeFile("notes.txt", "Hello, node.js");
        console.log("File created successfully written in the file.notes.txt");
        
        // read the file
        const data = await readFile("notes.txt", "utf-8");
        console.log("File content:", data);
        
        // append to the file
        await appendFile("notes.txt", "\nAppended text");
        console.log("Text appended successfully");
        
    } catch (error) {
        console.error("Error:", error);
    }
}

fileOperations();