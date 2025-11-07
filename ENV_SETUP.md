# Configuración de Variables de Entorno para Resend

## Variables Requeridas

Para que la lista de espera funcione correctamente, necesitas configurar las siguientes variables de entorno en Vercel:

### 1. RESEND_API_KEY

**Descripción:** Tu clave API de Resend para enviar emails.

**Cómo obtenerla:**
1. Ve a [https://resend.com/api-keys](https://resend.com/api-keys)
2. Crea una nueva API key
3. Copia la key (solo se muestra una vez)

**Formato:**
```
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxx
```

### 2. RESEND_AUDIENCE_ID

**Descripción:** El ID de tu audiencia en Resend donde se agregarán los contactos de la lista de espera.

**Cómo obtenerla:**
1. Ve a [https://resend.com/audiences](https://resend.com/audiences)
2. Crea una nueva audiencia (ej: "Tribbe Waitlist")
3. Copia el ID de la audiencia

**Formato:**
```
RESEND_AUDIENCE_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
```

## Configuración en Vercel

### Opción 1: Desde el Dashboard de Vercel

1. Ve a tu proyecto en Vercel
2. Navega a **Settings** → **Environment Variables**
3. Agrega las dos variables mencionadas arriba
4. Selecciona los entornos donde aplicarán (Production, Preview, Development)
5. Guarda los cambios
6. Redespliega tu aplicación

### Opción 2: Desde la CLI de Vercel

```bash
# Agregar variables de entorno
vercel env add RESEND_API_KEY
vercel env add RESEND_AUDIENCE_ID

# O usar un archivo .env
vercel env pull
```

## Desarrollo Local

Para desarrollo local, crea un archivo `.env.local` en la raíz del proyecto:

```bash
# .env.local
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxx
RESEND_AUDIENCE_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
```

**Nota:** El archivo `.env.local` no debe ser commiteado a Git. Ya está incluido en `.gitignore`.

## Verificación de Email en Resend

### Paso Importante: Verificar tu dominio

Para enviar emails en producción, necesitas:

1. Ve a [https://resend.com/domains](https://resend.com/domains)
2. Agrega tu dominio (ej: `tribbe.app`)
3. Sigue las instrucciones para agregar los registros DNS
4. Espera la verificación (puede tardar unos minutos)

Una vez verificado, actualiza el campo `from` en `/api/subscribe.ts`:

```typescript
from: 'Tribbe <onboarding@tribbe.app>', // Usa tu dominio verificado
```

### Para desarrollo/testing

Si solo estás probando, puedes usar:

```typescript
from: 'Tribbe <onboarding@resend.dev>', // Solo para testing
```

**Nota:** Los emails enviados desde `resend.dev` solo llegarán al email del propietario de la cuenta de Resend.

## Estructura de Archivos API

```
/api
  /subscribe.ts         # Endpoint principal
  /templates
    /WelcomeEmail.tsx   # Template del email de bienvenida
```

## Testing de la API

### En desarrollo local:

```bash
npm run dev
```

Luego prueba el endpoint con:

```bash
curl -X POST http://localhost:5173/api/subscribe \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com"}'
```

### En producción:

El endpoint estará disponible en:
```
https://tudominio.com/api/subscribe
```

## Troubleshooting

### Error: "Missing API Key"
- Verifica que `RESEND_API_KEY` esté configurada correctamente
- Redespliega tu aplicación después de agregar las variables

### Error: "Invalid Audience ID"
- Verifica que `RESEND_AUDIENCE_ID` sea correcto
- Asegúrate de que la audiencia exista en tu cuenta de Resend

### Los emails no llegan
- Verifica tu bandeja de spam
- Confirma que tu dominio esté verificado en Resend
- Revisa los logs en el Dashboard de Resend

## Recursos Adicionales

- [Documentación de Resend](https://resend.com/docs)
- [Guía de Audiences](https://resend.com/docs/dashboard/audiences/introduction)
- [Vercel Environment Variables](https://vercel.com/docs/projects/environment-variables)

