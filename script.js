function showContent(section) {
    const contentArea = document.getElementById('contentArea');

    let content = '';

    switch (section) {
        case 'content1':
            content = '<h2>Content for Section 1</h2><p>This is the content for section 1.</p>';
            break;
        case 'content2':
            content = '<h2>Content for Section 2</h2><p>This is the content for section 2.</p>';
            break;
        case 'content3':
            content = '<h2>Content for Section 3</h2><p>This is the content for section 3.</p>';
            break;
        case 'content4':
            content = '<h2>Content for Section 4</h2><p>This is the content for section 4.</p>';
            break;
        default:
            content = '<h2>Welcome</h2><p>Please select a section from the left panel to view content.</p>';
    }

    contentArea.innerHTML = content;
}
