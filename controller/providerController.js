class ProviderController {
  /**
   * Controlador ultilizado nas rotas de produtos.
   * @param {Supabase} supabse
   */
  constructor(supabse) {
    this.sb = supabse;
  }

  async health(req, res) {
    res.send("HEALTH OK!");
  }

  async getProvider(req, res) {
    const { data, error } = await this.sb.from("fornecedores").select("*");
    if (error) {
      return res.status(500).json({ SupabaseError: error });
    } else {
      return res.json(data);
    }
  }

  async postProvider(req, res) {
    const { nome, cnpj, email, telefone, ativo } = req.body;
    try {
      const { data, error } = await this.sb
        .from("fornecedores")
        .insert([
          {
            nome,
            cnpj,
            email,
            telefone,
            ativo,
          },
        ])
        .select();

      if (error) {
        return res.status(400).json({ SupabaseError: erro });
      }
    } catch (error) {
      return res.status(500).json({ SupabaseError: error });
    }
  }
}
export default ProviderController;
