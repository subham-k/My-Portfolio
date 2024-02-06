


const imageUrls = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"];
        const interval = 3000;
        let currentIndex= 0;

        function changeImage() {
            const imgElement = document.getElementById("changingImage");
            imgElement.style.opacity = 0;
            setTimeout(() => {
                imgElement.src = imageUrls[currentIndex];
                currentIndex = (currentIndex + 1) % imageUrls.length;
                imgElement.style.opacity = 1; 
            }, 500); 
        }

    setInterval(changeImage, interval);

    function downloadResume() {
        var link = document.createElement('a');
        link.download = 'https://drive.google.com/file/d/1_OcsIUpvbuFKoNrE9vl059ninqoABaQR/view?usp=sharing';
        link.href = 'https://drive.google.com/file/d/1_OcsIUpvbuFKoNrE9vl059ninqoABaQR/view?usp=sharing';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }