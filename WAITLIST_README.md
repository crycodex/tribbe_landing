# 🎉 Sistema de Lista de Espera con Resend

Sistema completo de lista de espera implementado para Tribbe, con integración de Resend Audiences y email de bienvenida automatizado.

## ✨ Características Implementadas

### Frontend (Componente CTA)
- ✅ Formulario con validación en tiempo real usando React Hook Form + Zod
- ✅ Estados de carga (loading, success, error)
- ✅ Notificaciones toast con Sonner
- ✅ Feedback visual con iconos animados
- ✅ Accesibilidad (ARIA labels, mensajes de error)
- ✅ Diseño responsive
- ✅ Prevención de doble envío

### Backend (API Serverless)
- ✅ Endpoint `/api/subscribe` en Vercel
- ✅ Validación de email
- ✅ Integración con Resend Audiences API
- ✅ Envío automático de email de bienvenida
- ✅ Manejo de duplicados (contactos que ya existen)
- ✅ Logs de errores
- ✅ Respuestas JSON estructuradas

### Email Template
- ✅ Email de bienvenida personalizado
- ✅ Diseño responsive con estilos inline
- ✅ Branding de Tribbe (colores dorado/naranja)
- ✅ Compatible con todos los clientes de email
- ✅ Información sobre beneficios de early adopters

## 📁 Estructura de Archivos Creados/Modificados

```
/Users/cristhianrecalde/dev/web/react/tribbe_landing/
├── api/
│   ├── subscribe.ts                    # Endpoint serverless de Vercel
│   └── templates/
│       └── WelcomeEmail.tsx            # Template del email
├── src/
│   └── components/
│       └── CTA.tsx                     # Componente actualizado con formulario
├── vercel.json                         # Configuración actualizada
├── ENV_SETUP.md                        # Guía de configuración de variables
└── WAITLIST_README.md                  # Este archivo
```

## 🚀 Deployment en Vercel

### Paso 1: Configurar Variables de Entorno

En el Dashboard de Vercel:

1. Ve a **Settings** → **Environment Variables**
2. Agrega estas dos variables:

```
RESEND_API_KEY=tu_api_key_de_resend
RESEND_AUDIENCE_ID=tu_audience_id
```

**¿Dónde obtener estos valores?**
- API Key: https://resend.com/api-keys
- Audience ID: https://resend.com/audiences

### Paso 2: Verificar tu Dominio en Resend

Para enviar emails en producción:

1. Ve a https://resend.com/domains
2. Agrega `tribbe.app` (o tu dominio)
3. Configura los registros DNS según las instrucciones
4. Espera la verificación

### Paso 3: Actualizar el Email "From"

Una vez verificado tu dominio, actualiza la línea 57 en `/api/subscribe.ts`:

```typescript
from: 'Tribbe <onboarding@tribbe.app>', // Usa tu dominio verificado
```

### Paso 4: Deploy

```bash
git add .
git commit -m "feat: Implementar lista de espera con Resend"
git push origin main
```

Vercel desplegará automáticamente.

## 🧪 Testing

### Test Local

1. Instala las dependencias:
```bash
npm install
```

2. Crea `.env.local`:
```bash
RESEND_API_KEY=tu_api_key
RESEND_AUDIENCE_ID=tu_audience_id
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Prueba el formulario en http://localhost:5173

### Test con cURL

```bash
curl -X POST https://tribbe.app/api/subscribe \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com"}'
```

Respuesta esperada:
```json
{
  "success": true,
  "message": "¡Te has unido exitosamente! Revisa tu email.",
  "data": {
    "contactId": "xxx-xxx-xxx"
  }
}
```

## 🎨 Flujo de Usuario

1. **Usuario ingresa email** → Validación en tiempo real
2. **Usuario hace clic en "Unirme"** → Botón muestra estado de carga
3. **Backend procesa**:
   - Valida email
   - Agrega a Resend Audience
   - Envía email de bienvenida
4. **Usuario ve confirmación** → Toast de éxito + mensaje verde
5. **Usuario recibe email** → Email de bienvenida en su bandeja

## 📊 Monitoreo

### Dashboard de Resend

Puedes monitorear:
- Emails enviados
- Contactos agregados a la audiencia
- Tasa de apertura de emails
- Bounces y errores

Ve a: https://resend.com/emails

### Logs de Vercel

Para ver logs de la API:
1. Ve a tu proyecto en Vercel
2. **Deployments** → Selecciona el deployment
3. **Functions** → `api/subscribe`
4. Revisa los logs en tiempo real

## ⚙️ Personalización

### Cambiar el Contenido del Email

Edita `/api/templates/WelcomeEmail.tsx` para modificar:
- Texto del email
- Colores y estilos
- Features mostradas
- CTAs

### Cambiar Validaciones del Formulario

Edita el schema en `/src/components/CTA.tsx`:

```typescript
const subscribeSchema = z.object({
  email: z
    .string()
    .min(1, "El email es requerido")
    .email("Por favor ingresa un email válido")
    .refine(
      (email) => !email.endsWith('@temporal.com'),
      'No se permiten emails temporales'
    ),
});
```

### Agregar Más Campos

Para agregar nombre u otros campos:

1. Actualiza el schema de validación
2. Modifica la interfaz `SubscribeRequestBody`
3. Agrega campos al formulario en CTA.tsx
4. Actualiza la llamada a Resend en `subscribe.ts`

Ejemplo:

```typescript
// En CTA.tsx
const subscribeSchema = z.object({
  email: z.string().email(),
  name: z.string().min(2, "Nombre muy corto"),
});

// En el formulario
<Input {...register("name")} placeholder="Tu nombre" />
```

## 🔒 Seguridad

### Medidas Implementadas

- ✅ Validación de email en frontend y backend
- ✅ Variables de entorno para credenciales
- ✅ Solo acepta método POST
- ✅ Headers CORS (configurados por Vercel)
- ✅ Sanitización de inputs

### Recomendaciones Adicionales

Para producción, considera agregar:

1. **Rate Limiting**: Limitar requests por IP
```typescript
// Usar vercel/edge-rate-limit o similar
```

2. **CAPTCHA**: Prevenir bots
```typescript
// Integrar hCaptcha o reCAPTCHA
```

3. **Honeypot**: Campo oculto para detectar bots
```typescript
<input type="text" name="website" style={{ display: 'none' }} />
```

## 🐛 Troubleshooting

### El formulario no envía

1. Abre las DevTools (F12)
2. Ve a la pestaña Network
3. Busca la llamada a `/api/subscribe`
4. Revisa el status code y respuesta

### Los emails no llegan

1. ✅ Verifica que tu dominio esté verificado en Resend
2. ✅ Revisa la carpeta de Spam
3. ✅ Confirma que `RESEND_API_KEY` esté configurada
4. ✅ Revisa logs en Resend Dashboard

### Error: "Missing API Key"

1. Ve a Vercel → Settings → Environment Variables
2. Confirma que `RESEND_API_KEY` existe
3. Redespliega la aplicación

### Error 405: Method Not Allowed

La API solo acepta POST. Verifica que estés usando:
```javascript
fetch('/api/subscribe', {
  method: 'POST',
  // ...
})
```

## 📈 Próximos Pasos

Mejoras sugeridas:

1. **Analytics**: Trackear conversiones con Google Analytics
2. **A/B Testing**: Probar diferentes copys del CTA
3. **Segmentación**: Crear diferentes audiences por interés
4. **Automation**: Configurar emails automáticos de seguimiento
5. **Export**: Funcionalidad para exportar la lista
6. **Admin Panel**: Dashboard para gestionar la lista

## 📚 Recursos

- [Resend Documentation](https://resend.com/docs)
- [Resend Audiences Guide](https://resend.com/docs/dashboard/audiences/introduction)
- [Vercel Serverless Functions](https://vercel.com/docs/functions/serverless-functions)
- [React Hook Form](https://react-hook-form.com/)
- [Zod Validation](https://zod.dev/)

## 💬 Soporte

Si tienes problemas:

1. Revisa este README
2. Consulta `ENV_SETUP.md`
3. Revisa los logs en Vercel
4. Consulta la documentación de Resend

---

**¡Lista de espera lista para usar!** 🚀

Ahora puedes recolectar emails de usuarios interesados y enviarles actualizaciones cuando lances Tribbe.

