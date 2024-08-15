function shareReferral() {
    const shareText = `Join me on playing MuskTap and receive ${WELCOME_BONUS} coins as your welcome bonus!\n` +
        `https://t.me/mustachio_bot?start=${window.sessionStorage.getItem('referralCode')}`;
    if (navigator.share) {
        navigator.share({
            title: 'MuskTap Referral',
            text: shareText
        })
            .then(() => console.log('referral link was successfully shared!'))
            .catch((error) => console.error('Error sharing:', error));
    } else if (navigator.clipboard) {
        navigator.clipboard.writeText(shareText)
            .then(() => alert('Referral link copied to clipboard!'))
            .catch((error) => console.error('error copying to clipboard:', error));
    } else {
        alert(shareText);  // show text in alert as fallback
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const inviteButton = document.querySelector('.invite-button');
    document.querySelectorAll('.ref-bonus').forEach(e => {e.textContent = REF_BONUS.toString()});

    inviteButton.addEventListener('click', shareReferral)

})
