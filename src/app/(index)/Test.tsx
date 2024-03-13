/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { supabase } from "@/supabase/client";
import { QueryData } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

export default function Test() {
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    (async () => {
      const query = supabase.from("reviews").select(`
      *,
      users (
        id
      ),
      classes (
        name
      ),
      grades (
        name
      )
    `);
      type CountriesWithCities = QueryData<typeof query>;

      const { data, error } = await query;
      if (error) throw error;
      const w: CountriesWithCities = data;
      setData(w);
    })();
  }, []);
  return <pre>{JSON.stringify(data, null, "\t")}</pre>;
}
