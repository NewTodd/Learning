function handleLessonAccess(current, previous) {
    const lang = document.querySelector('[data-lang][style*="block"]')?.dataset.lang || 'en';
  
    // Block access if previous not complete
    if (previous) {
      const completed = JSON.parse(localStorage.getItem('completedSteps') || '[]');
      if (!completed.includes(previous)) {
        alert(lang === "kh"
          ? "🔒 សូមបញ្ចប់មេរៀនមុនសិន មុននឹងបន្តមេរៀននេះ។"
          : "🔒 Please complete the previous lesson first.");
        window.location.href = "lesson-overview.html";
      }
    }
  
    const completeBtn = document.getElementById("completeLesson");
    if (completeBtn) {
      completeBtn.addEventListener("click", () => {
        let completed = JSON.parse(localStorage.getItem("completedSteps") || "[]");
        if (!completed.includes(current)) {
          completed.push(current);
          localStorage.setItem("completedSteps", JSON.stringify(completed));
          alert(lang === "kh"
            ? "✅ អ្នកបានបញ្ចប់មេរៀននេះដោយជោគជ័យ។"
            : "✅ Lesson marked as complete!");
        } else {
          alert(lang === "kh"
            ? "✅ អ្នកបានបញ្ចប់មេរៀននេះរួចហើយ។"
            : "✅ You already completed this lesson.");
        }
      });
    }
  }
  