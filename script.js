let button = document.querySelector('button'); // using querySelector to select the button

const title = ["Good", " Morning", " Response!", 
"This text discusses the transformative impact of electric technology on society, emphasizing how it reshapes social structures and personal lives. It suggests that the medium of communication, rather than the content, shapes societies, citing examples like the alphabet and electric technology. The author argues that electric technology fosters unification and involvement. The text highlights the challenges and anxieties associated with technological and cultural transitions. It emphasizes the importance of understanding media to comprehend social and cultural changes. The author critiques traditional approaches and suggests that the younger generation instinctively grasps the electric environment. The text also touches on the need for humor and a flexible mindset in learning. In the context of privacy, it discusses the dilemma between individual privacy and the community's need to know, especially with the rise of surveillance technologies. The family dynamic is described as widening due to the global pool of information created by electric media. Overall, the text explores the profound impact of electric technology on various aspects of life and encourages a dynamic approach to understanding and navigating the changing environment.",
 "It suggests that electric technology has abolished the traditional concepts of time and space creating a global dialogue and signaling total change in psychic, social, economic, and political realms. The old civic and national structures are deemed unworkable in the face of this technological revolution. The educational system, modeled on a nineteenth-century environment, is contrasted with the integrated electric information present in modern homes, affecting the way children perceive and interact with information. The concept of childhood itself is discussed in the context of historical changes.", 
 "The text further examines the evolving nature of jobs in the electric circuitry era, critiquing traditional job patterns and highlighting a shift towards roles resembling teaching, learning, and human service. Political and governmental structures are seen as outdated, with traditional nose-counting methods becoming ineffective in an environment of instant electric speeds. The emergence of a new form of politics, influenced by television and mass participation, is noted.Lastly, the text emphasizes the impact of the electric information environment on minority groups, stating that they can no longer be contained or ignored. The interconnectedness created by this new environment necessitates commitment and responsibility toward each other. Overall, the text portrays a world undergoing significant changes due to the influence of electric technology."
];

var outputDiv = document.getElementById('title');
var par1 = document.getElementById('par1');
var par2 = document.getElementById('par2');
var par3 = document.getElementById('par3');
var currentIndex = 0;

function printTitle() {
    if (currentIndex >= title.length) {
        outputDiv.textContent = '';
        par1.textContent = '';
        par2.textContent = '';
        par3.textContent = '';
        currentIndex = 0;
    } else if (currentIndex < 3){
        outputDiv.textContent += title[currentIndex] + ' '; 
        currentIndex += 1;
    } else if (currentIndex == 3){
        par1.textContent += title[currentIndex];
        currentIndex += 1;
    }
    else if (currentIndex == 4){
        par2.textContent += title[currentIndex];
        currentIndex += 1;
    }
    else if (currentIndex == 5){
        par3.textContent += title[currentIndex];
        currentIndex += 1;
    }
}

button.addEventListener("click", function() {
    printTitle();
});




