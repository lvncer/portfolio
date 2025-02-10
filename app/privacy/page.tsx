"use client"

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

export default function Privacy() {
  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <Card>
            <CardContent className="p-6 space-y-6">
              <section>
                <h2 className="text-2xl font-semibold mb-4">Overview</h2>
                <p className="text-muted-foreground">
                  This privacy policy outlines how we collect, use, and protect your personal information when you visit our website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Information Collection</h2>
                <p className="text-muted-foreground">
                  We collect information that you voluntarily provide when contacting us through our website.
                  This may include your name, email address, and any other information you choose to share.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Information Usage</h2>
                <p className="text-muted-foreground">
                  The information we collect is used solely for the purpose of communicating with you
                  and improving our services. We do not sell or share your personal information with third parties.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Contact</h2>
                <p className="text-muted-foreground">
                  If you have any questions about our privacy policy, please contact us at privacy@example.com.
                </p>
              </section>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}