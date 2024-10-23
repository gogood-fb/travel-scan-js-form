document.addEventListener('DOMContentLoaded', function() {
    // Function to toggle visibility of conditional sections
    function toggleConditional(selectElement, conditionalElement) {
        if (selectElement.value === 'yes') {
            conditionalElement.style.display = 'block';
        } else {
            conditionalElement.style.display = 'none';
        }
    }

    const question1Select = document.getElementById('question-1-select');
    const question1Conditional = document.getElementById('question-1-conditional');
    question1Select.addEventListener('change', function() {
        toggleConditional(question1Select, question1Conditional);
    });

    const question2Select = document.getElementById('question-2-select');
    const question2Conditional = document.getElementById('question-2-conditional');
    question2Select.addEventListener('change', function() {
        toggleConditional(question2Select, question2Conditional);
    });

    const question3Select = document.getElementById('question-3-select');
    const question3Conditional = document.getElementById('question-3-conditional');
    question3Select.addEventListener('change', function() {
        toggleConditional(question3Select, question3Conditional);
    });

    const question4Select = document.getElementById('question-4-select');
    const question4Conditional = document.getElementById('question-4-conditional');
    question4Select.addEventListener('change', function() {
        toggleConditional(question4Select, question4Conditional);
    });

    const question5Select = document.getElementById('question-5-select');
    const question5Conditional = document.getElementById('question-5-conditional');
    question5Select.addEventListener('change', function() {
        toggleConditional(question5Select, question5Conditional);
    });
      
    const question6Select = document.getElementById('question-6-select');
    const question6Conditional = document.getElementById('question-6-conditional');
    question6Select.addEventListener('change', function() {
        toggleConditional(question6Select, question6Conditional);
    });

    const question7Select = document.getElementById('question-7-select');
    const question7Conditional = document.getElementById('question-7-conditional');
    question7Select.addEventListener('change', function() {
        toggleConditional(question7Select, question7Conditional);
    });

    const question8Select = document.getElementById('question-8-select');
    const question8Conditional = document.getElementById('question-8-conditional');
    question8Select.addEventListener('change', function() {
        toggleConditional(question8Select, question8Conditional);
    });

    const question9Select = document.getElementById('question-9-select');
    const question9Conditional = document.getElementById('question-9-conditional');
    question9Select.addEventListener('change', function() {
        toggleConditional(question9Select, question9Conditional);
    });

    const question10Select = document.getElementById('question-10-select');
    const question10Conditional = document.getElementById('question-10-conditional');
    question10Select.addEventListener('change', function() {
        toggleConditional(question10Select, question10Conditional);
    });

    const question11Select = document.getElementById('question-11-select');
    const question11Conditional = document.getElementById('question-11-conditional');
    question11Select.addEventListener('change', function() {
        toggleConditional(question11Select, question11Conditional);
    });

    const question12Select = document.getElementById('question-12-select');
    const question12Conditional = document.getElementById('question-12-conditional');
    question12Select.addEventListener('change', function() {
        toggleConditional(question12Select, question12Conditional);
    });

    const question13Select = document.getElementById('question-13-select');
    const question13Conditional = document.getElementById('question-13-conditional');
    question13Select.addEventListener('change', function() {
        toggleConditional(question13Select, question13Conditional);
    });

    const question14Select = document.getElementById('question-14-select');
    const question14Conditional = document.getElementById('question-14-conditional');
    question14Select.addEventListener('change', function() {
        toggleConditional(question14Select, question14Conditional);
    });

    const question15Select = document.getElementById('question-15-select');
    const question15Conditional = document.getElementById('question-15-conditional');
    question15Select.addEventListener('change', function() {
        toggleConditional(question15Select, question15Conditional);
    });

    const question16Select = document.getElementById('question-16-select');
    const question16Conditional = document.getElementById('question-16-conditional');
    question16Select.addEventListener('change', function() {
        toggleConditional(question16Select, question16Conditional);
    });

    const question17Select = document.getElementById('question-17-select');
    const question17Conditional = document.getElementById('question-17-conditional');
    question17Select.addEventListener('change', function() {
        toggleConditional(question17Select, question17Conditional);
    });

    const question18Select = document.getElementById('question-18-select');
    const question18Conditional = document.getElementById('question-18-conditional');
    question18Select.addEventListener('change', function() {
        toggleConditional(question18Select, question18Conditional);
    });

    const question19Select = document.getElementById('question-19-select');
    const question19Conditional = document.getElementById('question-19-conditional');
    question19Select.addEventListener('change', function() {
        toggleConditional(question19Select, question19Conditional);
    });

    const question20Select = document.getElementById('question-20-select');
    const question20Conditional = document.getElementById('question-20-conditional');
    question20Select.addEventListener('change', function() {
        toggleConditional(question20Select, question20Conditional);
    });

    const question21Select = document.getElementById('question-21-select');
    const question21Conditional = document.getElementById('question-21-conditional');
    question21Select.addEventListener('change', function() {
        toggleConditional(question21Select, question21Conditional);
    });

    const question22Select = document.getElementById('question-22-select');
    const question22Conditional = document.getElementById('question-22-conditional');
    question22Select.addEventListener('change', function() {
        toggleConditional(question22Select, question22Conditional);
    });

    const question23Select = document.getElementById('question-23-select');
    const question23Conditional = document.getElementById('question-23-conditional');
    question23Select.addEventListener('change', function() {
        toggleConditional(question23Select, question23Conditional);
    });

    const question24Select = document.getElementById('question-24-select');
    const question24Conditional = document.getElementById('question-24-conditional');
    question24Select.addEventListener('change', function() {
        toggleConditional(question24Select, question24Conditional);
    });

    const question25Select = document.getElementById('question-25-select');
    const question25Conditional = document.getElementById('question-25-conditional');
    question25Select.addEventListener('change', function() {
        toggleConditional(question25Select, question25Conditional);
    });

    const question26Select = document.getElementById('question-26-select');
    const question26Conditional = document.getElementById('question-26-conditional');
    question26Select.addEventListener('change', function() {
        toggleConditional(question26Select, question26Conditional);
    });

    // Handle form submission
    const form = document.getElementById('travel-scan-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent default form submission

        // Gather form data and display it
        const formData = new FormData(form);
        let output = '';
        formData.forEach((value, key) => {
            output += `${key}: ${value}\n`;
        });

        document.getElementById('form-output').innerText = output;
    });
});
