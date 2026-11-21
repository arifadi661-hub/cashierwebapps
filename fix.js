document.getElementById('todayLabel').textContent=new Intl.DateTimeFormat('id-ID',{weekday:'long',day:'numeric',month:'long'}).format(new Date());
document.getElementById('storeForm').onsubmit=e=>{e.preventDefault();state.store={name:document.getElementById('storeName').value.trim(),address:document.getElementById('storeAddress').value.trim(),phone:document.getElementById('storePhone').value.trim()};saveState('Profil toko tersimpan');renderStore();toast('Profil toko berhasil disimpan')};
function updateNetwork(){document.getElementById('networkTitle').textContent=navigator.onLine?'Mode Online':'Mode Offline';document.getElementById('saveStatus').textContent=navigator.onLine?'Semua tersimpan':'Siap offline'}
window.addEventListener('online',()=>{updateNetwork();toast('Koneksi kembali tersedia')});window.addEventListener('offline',()=>{updateNetwork();toast('Mode offline aktif')});
window.addEventListener('beforeunload',()=>saveState('Perubahan tersimpan'));document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='hidden')saveState('Perubahan tersimpan')});
window.addEventListener('pagehide',()=>saveState('Perubahan tersimpan'));updateNetwork();
if('serviceWorker' in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));
