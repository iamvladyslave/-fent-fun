# 🚀 Deploy to Vercel (Free)

## 📋 What you need to do:

### 1. Install Vercel CLI
```bash
npm install -g vercel
```

### 2. Login to Vercel account
```bash
vercel login
```

### 3. Deploy project
```bash
vercel --prod
```

## 🌐 Getting .fun domain

### Option 1: Vercel + Freenom (Free)
1. After deploying to Vercel get URL like: `your-project.vercel.app`
2. Register on [freenom.com](https://freenom.com)
3. Choose free .fun domain
4. Configure DNS records to Vercel

### Option 2: Vercel + Namecheap (.fun domains)
1. Buy .fun domain on [namecheap.com](https://namecheap.com) (~$10/year)
2. Configure DNS records to Vercel

## 🔧 DNS setup for .fun domain

### In domain control panel add:
```
Type: CNAME
Name: @
Value: cname.vercel-dns.com
```

### Or for www:
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

## 📱 Vercel Dashboard setup

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Select your project
3. Go to Settings → Domains
4. Add your .fun domain
5. Follow DNS setup instructions

## 🎯 Alternative free hosting

### Netlify (also free)
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### GitHub Pages
1. Create repository on GitHub
2. Enable GitHub Pages in settings
3. Upload contents of `dist` folder

## 💡 Optimization tips

1. **Image compression** - use WebP format
2. **Lazy loading** - load 3D models on demand
3. **CDN** - Vercel automatically uses CDN
4. **Caching** - configure cache headers

## 🚨 Possible issues

### Issue: White screen after loading
**Solution:** Check browser console for JavaScript errors

### Issue: 3D scene not displaying
**Solution:** Make sure WebGL is supported by browser

### Issue: Slow loading
**Solution:** Optimize 3D models and textures size

## 📞 Support

- Vercel Support: [vercel.com/support](https://vercel.com/support)
- Documentation: [vercel.com/docs](https://vercel.com/docs)
- Community: [github.com/vercel/vercel/discussions](https://github.com/vercel/vercel/discussions)

---

🎉 **After setup your 3D space project will be available to everyone at: `your-project.fun`** 🎉
